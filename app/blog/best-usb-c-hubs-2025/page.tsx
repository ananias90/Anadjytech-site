import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion"

export const metadata: Metadata = {
  title: "Best USB-C Hubs 2025 – Top Picks for Every Budget",
  description:
    "Compare affordable, mid-range, and premium USB-C hubs. Find the perfect hub for your devices with our detailed reviews and buying guide.",
  openGraph: {
    title: "Best USB-C Hubs 2025 – Top Picks for Every Budget",
    description:
      "Compare affordable, mid-range, and premium USB-C hubs. Find the perfect hub for your devices with our detailed reviews and buying guide.",
    type: "article",
    url: "https://www.anadjytech.com/blog/best-usb-c-hubs-2025",
    images: [
      {
        url: "https://www.anadjytech.com/images/usb-c-hubs-2025.jpg",
        width: 1200,
        height: 675,
        alt: "Best USB-C Hubs 2025 - Top Picks for Every Budget",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best USB-C Hubs 2025 – Top Picks for Every Budget",
    description:
      "Compare affordable, mid-range, and premium USB-C hubs. Find the perfect hub for your devices with our detailed reviews and buying guide.",
    images: ["https://www.anadjytech.com/images/usb-c-hubs-2025.jpg"],
  },
  alternates: {
    canonical: "https://www.anadjytech.com/blog/best-usb-c-hubs-2025",
  },
}

const usbcHubs = [
  {
    id: 1,
    name: "Anker PowerExpand 8-in-1",
    image: "/anker-usb-c-hub.jpg",
    description: "Hub compact avec HDMI 4K, 3 ports USB-A, lecteurs SD/microSD, et charge Power Delivery 85W.",
    price: "69,99€",
  },
  {
    id: 2,
    name: "Baseus 11-in-1 Station d'accueil",
    image: "/baseus-usb-c-docking-station.jpg",
    description:
      "Construction aluminium premium avec double HDMI, Ethernet, ports USB multiples et pad de charge sans fil.",
    price: "89,99€",
  },
  {
    id: 3,
    name: "Satechi V2 Adaptateur Multiport",
    image: "/satechi-aluminum-usb-c-hub.jpg",
    description: "Design aluminium élégant parfait pour MacBooks avec HDMI 4K, Ethernet Gigabit et charge rapide.",
    price: "99,99€",
  },
  {
    id: 4,
    name: "HyperDrive Gen2 12-in-1",
    image: "/hyperdrive-usb-c-hub.jpg",
    description:
      "Connectivité ultime avec double écrans 4K, transfert de données rapide et support Power Delivery 100W.",
    price: "129,99€",
  },
  {
    id: 5,
    name: "CalDigit SOHO Dock",
    image: "/caldigit-usb-c-dock.jpg",
    description: "Station d'accueil professionnelle avec Thunderbolt 3, support multi-écrans et audio qualité studio.",
    price: "179,99€",
  },
  {
    id: 6,
    name: "Plugable UD-ULTC4K",
    image: "/plugable-usb-c-docking-station.jpg",
    description: "Station d'accueil niveau entreprise avec support triple écran, Ethernet Gigabit et charge 60W.",
    price: "149,99€",
  },
]

export default function BestUsbcHubs2025Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Best USB-C Hubs 2025: Top Picks for Every Budget",
    description:
      "Compare affordable, mid-range, and premium USB-C hubs. Find the perfect hub for your devices with our detailed reviews and buying guide.",
    image: "https://www.anadjytech.com/images/usb-c-hubs-2025.jpg",
    author: {
      "@type": "Organization",
      name: "AnadjyTech Editorial",
      url: "https://www.anadjytech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AnadjyTech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.anadjytech.com/logo.png",
      },
    },
    datePublished: "2025-09-01",
    dateModified: "2025-09-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.anadjytech.com/blog/best-usb-c-hubs-2025",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Section Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-blue-100 mb-8">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Hubs USB-C 2025</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            {/* Image d'illustration en haut */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Image
                src="/modern-usb-c-hubs-collection-on-desk.jpg"
                alt="Best USB-C Hubs 2025"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* Titre principal H1 */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best USB-C Hubs 2025: Top Picks for Every Budget</h1>

            {/* Sous-titre court */}
            <p className="text-xl text-blue-100 mb-8">
              Découvrez les hubs USB-C les plus fiables et riches en fonctionnalités qui transformeront votre espace de
              travail en 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                En 2025, les hubs USB-C sont devenus des outils indispensables pour quiconque travaille avec des
                ordinateurs portables et appareils modernes. Alors que les fabricants continuent de réduire le nombre de
                ports sur les ordinateurs portables au profit de designs plus élégants, un hub USB-C fiable fait le pont
                entre minimalisme et fonctionnalité.
              </p>
              <p className="text-lg leading-relaxed">
                Que vous soyez nomade numérique, professionnel créatif ou étudiant, le bon hub USB-C peut transformer
                votre port unique en station de travail complète. Nous avons testé des dizaines de hubs pour vous
                apporter le guide définitif des meilleures options disponibles en 2025.
              </p>
            </div>
          </section>

          {/* Grille de produits (6 produits) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Top 6 des Hubs USB-C pour 2025</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {usbcHubs.map((hub) => (
                <div
                  key={hub.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-video relative">
                    <Image src={hub.image || "/placeholder.svg"} alt={hub.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    {/* Nom du produit */}
                    <h3 className="text-xl font-bold mb-3">{hub.name}</h3>
                    {/* Description courte */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{hub.description}</p>
                    <div className="flex items-center justify-between">
                      {/* Prix indicatif */}
                      <span className="text-2xl font-bold text-blue-600">{hub.price}</span>
                      {/* Bouton Acheter sur Amazon */}
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Acheter sur Amazon
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tableau comparatif (3 meilleurs hubs) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Comparaison des 3 Meilleurs Hubs</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {/* Colonnes : Produit, Prix, Nombre de ports, Compatibilité, Note */}
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Produit</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Prix</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Nombre de ports</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Compatibilité</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* 3 lignes correspondant aux 3 modèles clés */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Anker PowerExpand 8-in-1</td>
                    <td className="px-6 py-4 text-gray-600">69,99€</td>
                    <td className="px-6 py-4 text-gray-600">8 ports</td>
                    <td className="px-6 py-4 text-gray-600">Universel</td>
                    <td className="px-6 py-4 text-gray-600">4.5/5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Satechi V2 Multiport</td>
                    <td className="px-6 py-4 text-gray-600">99,99€</td>
                    <td className="px-6 py-4 text-gray-600">7 ports</td>
                    <td className="px-6 py-4 text-gray-600">MacBook optimisé</td>
                    <td className="px-6 py-4 text-gray-600">4.7/5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">CalDigit SOHO Dock</td>
                    <td className="px-6 py-4 text-gray-600">179,99€</td>
                    <td className="px-6 py-4 text-gray-600">11 ports</td>
                    <td className="px-6 py-4 text-gray-600">Professionnel</td>
                    <td className="px-6 py-4 text-gray-600">4.8/5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquemment Posées</h2>
            <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-lg">
              {/* Trois questions avec réponses courtes */}
              <AccordionItem value="item-1" className="border-b border-gray-200 px-6">
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold">
                    Un hub USB-C est-il compatible avec tous les ordinateurs portables ?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600">
                  La plupart des hubs USB-C sont compatibles avec tous les appareils dotés d'un port USB-C, mais
                  certaines fonctionnalités comme la charge rapide ou l'affichage vidéo peuvent varier selon votre
                  appareil. Vérifiez toujours les spécifications de votre ordinateur portable avant l'achat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200 px-6">
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold">Quelle est la différence entre un hub et un dock ?</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600">
                  Les hubs USB-C sont portables et offrent une connectivité de base, tandis que les stations d'accueil
                  (docks) sont plus grandes, stationnaires, avec plus de ports et de fonctionnalités comme le support
                  multi-écrans, une alimentation plus puissante et parfois du stockage intégré.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="px-6">
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold">Faut-il un hub avec alimentation externe ?</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600">
                  Cela dépend de vos besoins. Si vous connectez plusieurs appareils gourmands en énergie ou si vous
                  voulez charger votre ordinateur portable rapidement, un hub avec alimentation externe (Power Delivery)
                  est recommandé. Pour un usage basique, un hub alimenté par bus suffit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Nos Recommandations Finales</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {/* Court paragraphe conseillant selon les besoins (budget, pro, voyage) */}
                <p className="mb-4">
                  <strong>Pour un budget serré :</strong> L'Anker PowerExpand 8-in-1 offre un excellent rapport
                  qualité-prix avec des performances fiables.
                </p>
                <p className="mb-4">
                  <strong>Pour les professionnels :</strong> Le CalDigit SOHO Dock est l'investissement idéal pour une
                  station de travail complète avec sa qualité de construction supérieure et ses options de connectivité
                  complètes.
                </p>
                <p className="mb-6">
                  <strong>Pour les voyageurs :</strong> Le Satechi V2 combine portabilité et élégance, parfait pour les
                  utilisateurs MacBook en déplacement.
                </p>
                <div className="text-center">
                  {/* Bouton CTA : "Shop on Amazon" */}
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Shop on Amazon
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Mention d'Affiliation Amazon</h3>
              {/* Ajoute une mention obligatoire d'affiliation Amazon */}
              <p className="text-sm text-yellow-700">
                En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions
                requises. Cet article contient des liens d'affiliation vers Amazon. Ces liens ne vous coûtent rien de
                plus et nous aident à maintenir ce contenu gratuit et de qualité. Merci de votre soutien !
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
