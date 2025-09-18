const synonyms: Record<string, string[]> = {
  smartphone: ["mobile", "cell phone", "cellphone", "handset", "portable"],
  laptop: ["notebook", "portable computer"],
  earbuds: ["in-ear", "earphones", "true wireless", "tws"],
  "bluetooth speaker": ["wireless speaker", "enceinte bluetooth"],
  smartwatch: ["connected watch", "fitness tracker"],
  "gaming laptop": ["portable gamer"],
  "action camera": ["caméra sport", "gopro"],
  "power bank": ["external battery", "batterie externe"],
}

function normalizeQuery(query: string): string[] {
  const normalized = query.toLowerCase().trim()
  const words = [normalized]

  // Add synonyms
  Object.entries(synonyms).forEach(([key, values]) => {
    if (normalized.includes(key)) {
      words.push(...values)
    }
    values.forEach((synonym) => {
      if (normalized.includes(synonym)) {
        words.push(key, ...values.filter((v) => v !== synonym))
      }
    })
  })

  return [...new Set(words)]
}

export function searchProducts(query: string, products: any[]) {
  const searchTerms = normalizeQuery(query)

  return products
    .filter((product) => {
      const searchableText = [product.title, product.category, product.brand, ...product.keywords]
        .join(" ")
        .toLowerCase()

      return searchTerms.some((term) => searchableText.includes(term))
    })
    .sort((a, b) => b.rating - a.rating)
}

export function searchCategories(query: string, categories: any[]) {
  const searchTerms = normalizeQuery(query)

  return categories.filter((category) => {
    const categoryName = category.name.toLowerCase()
    return searchTerms.some((term) => categoryName.includes(term))
  })
}

export function searchBrands(query: string, brands: any[]) {
  const searchTerms = normalizeQuery(query)

  return brands.filter((brand) => {
    const brandName = brand.name.toLowerCase()
    return searchTerms.some((term) => brandName.includes(term))
  })
}
