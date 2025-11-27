import { useRef } from 'react';
import { uploadImage } from '@/lib/api/upload';

export const useQuillImageUpload = () => {
  const quillRef = useRef<any>(null);

  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      if (!input.files || !input.files[0]) return;

      const file = input.files[0];
      const editor = quillRef.current?.getEditor();
      
      if (!editor) return;

      // File validation
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, GIF, WebP)');
        return;
      }

      const range = editor.getSelection(true);

      try {
        // Insert loading indicator
        editor.insertText(range.index, '🔄 Uploading image...');
        editor.setSelection(range.index, 20);

        // Upload image
        const result = await uploadImage(file);
        
        // Remove loading text and insert image
        editor.deleteText(range.index, 20);
        editor.insertEmbed(range.index, 'image', result.imageUrl);
        
        // Move cursor after the image
        editor.setSelection(range.index + 1, 0);

      } catch (error: any) {
        // Handle upload error
        const currentRange = editor.getSelection(true);
        editor.deleteText(currentRange.index - 20, 20);
        editor.insertText(currentRange.index, '❌ Upload failed: ' + (error.message || 'Please try again'));
        console.error('Image upload failed:', error);
      }
    };
  };

  const quillModules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ align: [] }],
        ["clean"],
      ],
      handlers: {
        image: imageHandler
      }
    },
  };

  return {
    quillRef,
    quillModules
  };
};