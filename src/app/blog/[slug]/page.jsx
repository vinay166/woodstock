'use client';

import Layout from '../../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Mock blog posts data (in a real implementation, this would come from Markdown files)
const blogPosts = [
  {
    id: 1,
    title: 'Top Interior Design Trends for 2023',
    excerpt: 'Discover the latest interior design trends that are shaping homes and offices in 2023, from sustainable materials to bold color choices.',
    content: `
      <p>Interior design is constantly evolving, with new trends emerging each year that reflect changing lifestyles, values, and aesthetic preferences. In 2023, we're seeing a fascinating blend of sustainability, technology, and comfort-focused design elements that are reshaping how we think about our living and working spaces.</p>
      
      <h2>1. Sustainable and Biophilic Design</h2>
      <p>Sustainability continues to be at the forefront of interior design in 2023. More homeowners and businesses are seeking eco-friendly materials, energy-efficient appliances, and designs that minimize environmental impact. This includes:</p>
      <ul>
        <li>Reclaimed and recycled materials</li>
        <li>Low-VOC paints and finishes</li>
        <li>Energy-efficient lighting and appliances</li>
        <li>Water-saving fixtures</li>
      </ul>
      <p>Alongside sustainability, biophilic design—which connects occupants with nature—is gaining significant traction. This includes incorporating natural light, ventilation, plants, and organic materials into interior spaces. Living walls, indoor gardens, and nature-inspired textures and patterns are becoming increasingly popular.</p>
      
      <h2>2. Multifunctional Spaces</h2>
      <p>The pandemic permanently changed how we use our homes, with many people continuing to work remotely at least part-time. This has led to a surge in multifunctional spaces that can adapt to different needs throughout the day. Flexible furniture, movable partitions, and convertible pieces that serve multiple purposes are in high demand.</p>
      
      <h2>3. Warm, Earthy Color Palettes</h2>
      <p>While minimalist white and gray interiors have dominated in recent years, 2023 is seeing a shift toward warmer, earthier tones. Terracotta, olive green, ochre, and warm browns are becoming increasingly popular, creating spaces that feel grounding and comforting. These colors are often paired with natural materials like wood, stone, and clay to enhance their organic feel.</p>
      
      <h2>4. Curved and Organic Forms</h2>
      <p>Angular, straight-lined furniture is giving way to softer, curved pieces that create a sense of comfort and flow. From rounded sofas and chairs to curved architectural elements like arched doorways and curved walls, organic shapes are adding visual interest and a sense of movement to interior spaces.</p>
      
      <h2>5. Statement Lighting</h2>
      <p>Lighting is increasingly being treated as art, with bold, sculptural fixtures becoming focal points in many spaces. Oversized pendants, artistic chandeliers, and unique sconces are being used to make strong design statements while also providing functional illumination.</p>
      
      <h2>6. Textural Richness</h2>
      <p>Texture is playing a bigger role in interior design, with designers layering different materials to create rich, tactile experiences. Bouclé fabrics, ribbed wood, fluted glass, and tactile wall treatments are all being used to add depth and interest to spaces, even those with a more minimalist aesthetic.</p>
      
      <h2>7. Smart Home Integration</h2>
      <p>Technology continues to be seamlessly integrated into our living spaces, with smart home features becoming more sophisticated and user-friendly. From lighting and temperature control to security systems and entertainment, technology is enhancing comfort, convenience, and energy efficiency in the home.</p>
      
      <h2>Conclusion</h2>
      <p>The interior design trends of 2023 reflect a collective desire for spaces that are sustainable, adaptable, comfortable, and personal. Whether you're planning a major renovation or simply looking to refresh your space, incorporating elements of these trends can help create an environment that feels both current and timeless.</p>
    `,
    date: 'June 1, 2023',
    author: 'Priya Sharma',
    authorBio: 'Priya is a senior interior designer with over 10 years of experience in residential and commercial projects. She specializes in sustainable design practices and contemporary aesthetics.',
    category: 'Design Trends',
    coverImage: '/images/slider.jpg',
    slug: 'interior-design-trends-2023',
    tags: ['trends', 'sustainability', 'design', '2023']
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Wood Flooring',
    excerpt: 'A comprehensive guide to selecting the right wood flooring for your space, considering durability, aesthetics, and maintenance requirements.',
    content: `
      <p>Wood flooring adds warmth, character, and value to any space, but with so many options available, choosing the right one can be overwhelming. This guide will walk you through the key considerations to help you select the perfect wood flooring for your home or office.</p>
      
      <h2>Types of Wood Flooring</h2>
      <p>Before diving into selection criteria, it's important to understand the main types of wood flooring available:</p>
      
      <h3>Solid Hardwood</h3>
      <p>Made from a single piece of wood, solid hardwood flooring is exactly what it sounds like. It typically ranges from 5/8 to 3/4 inch thick and can be sanded and refinished multiple times, potentially lasting for generations with proper care.</p>
      
      <h3>Engineered Wood</h3>
      <p>Engineered wood consists of a thin layer of hardwood bonded to a high-quality plywood base. This construction provides greater stability and resistance to moisture and temperature changes compared to solid hardwood, making it suitable for basements and over concrete slabs.</p>
      
      <h3>Laminate and Luxury Vinyl</h3>
      <p>While not true wood, laminate and luxury vinyl plank (LVP) flooring can provide the look of wood at a lower cost and with greater durability in some cases. Modern manufacturing techniques have made these options increasingly realistic in appearance.</p>
      
      <h2>Key Considerations for Selecting Wood Flooring</h2>
      
      <h3>1. Location and Usage</h3>
      <p>Consider where the flooring will be installed and how the space is used:</p>
      <ul>
        <li><strong>High-traffic areas</strong> (entryways, kitchens, living rooms) benefit from harder wood species and more durable finishes.</li>
        <li><strong>Moisture-prone areas</strong> (bathrooms, basements) may require engineered wood or water-resistant alternatives.</li>
        <li><strong>Homes with pets or children</strong> might need more scratch-resistant options and finishes.</li>
      </ul>
      
      <h3>2. Wood Species</h3>
      <p>Different wood species offer varying levels of hardness, grain patterns, and color options:</p>
      <ul>
        <li><strong>Oak</strong>: A popular choice known for its durability and distinctive grain. Red oak has pink undertones, while white oak has more yellow and brown hues.</li>
        <li><strong>Maple</strong>: Extremely hard with a subtle grain pattern and light color that brightens spaces.</li>
        <li><strong>Walnut</strong>: Prized for its rich, dark color and straight grain, though softer than oak or maple.</li>
        <li><strong>Cherry</strong>: Develops a rich patina over time but is relatively soft and prone to dents.</li>
        <li><strong>Exotic species</strong> (Brazilian cherry, teak, mahogany): Often harder and more distinctive but typically more expensive.</li>
      </ul>
      
      <h3>3. Hardness</h3>
      <p>The Janka hardness scale measures a wood's resistance to dents and wear. Higher numbers indicate harder woods:</p>
      <ul>
        <li>Soft: Pine (420-870)</li>
        <li>Medium: Cherry (950), Walnut (1010)</li>
        <li>Hard: Oak (1290-1360), Maple (1450)</li>
        <li>Very Hard: Brazilian Cherry (2350), Hickory (1820)</li>
      </ul>
      
      <h3>4. Color and Grain</h3>
      <p>Consider how the color and grain pattern will complement your overall design:</p>
      <ul>
        <li>Lighter woods make spaces feel larger and more casual</li>
        <li>Darker woods create a more formal, intimate atmosphere</li>
        <li>Pronounced grain patterns add visual interest but can compete with busy décor</li>
        <li>Remember that many woods naturally darken or develop patina over time</li>
      </ul>
      
      <h3>5. Finish</h3>
      <p>The finish affects both appearance and maintenance requirements:</p>
      <ul>
        <li><strong>Matte/satin finishes</strong> hide scratches and dents better but may show footprints and dust more</li>
        <li><strong>Semi-gloss/gloss finishes</strong> are more reflective and easier to clean but highlight imperfections</li>
        <li><strong>Oil-based finishes</strong> penetrate the wood and enhance natural color but require more maintenance</li>
        <li><strong>Water-based polyurethane</strong> offers durability with less yellowing over time</li>
      </ul>
      
      <h3>6. Installation Method</h3>
      <p>Different flooring types require different installation methods:</p>
      <ul>
        <li><strong>Nail-down</strong>: Traditional method for solid hardwood over wood subfloors</li>
        <li><strong>Glue-down</strong>: Often used for engineered wood over concrete</li>
        <li><strong>Floating</strong>: Pieces lock together and "float" over the subfloor without being attached to it (common for engineered and laminate flooring)</li>
      </ul>
      
      <h3>7. Budget</h3>
      <p>Wood flooring costs vary widely based on species, quality, and installation:</p>
      <ul>
        <li>Solid hardwood: $8-15+ per square foot installed</li>
        <li>Engineered hardwood: $7-13+ per square foot installed</li>
        <li>Laminate and luxury vinyl: $3-7+ per square foot installed</li>
      </ul>
      
      <h2>Making Your Final Decision</h2>
      <p>After narrowing down your options based on the above criteria:</p>
      <ol>
        <li>Request samples to see how they look in your space with your lighting</li>
        <li>Test durability by trying to scratch or dent samples (if possible)</li>
        <li>Consider long-term maintenance requirements and whether they fit your lifestyle</li>
        <li>Consult with a flooring professional about specific concerns for your space</li>
      </ol>
      
      <p>Remember that wood flooring is a long-term investment. Taking time to make the right choice will ensure you enjoy your floors for many years to come.</p>
    `,
    date: 'May 15, 2023',
    author: 'Rahul Verma',
    authorBio: 'Rahul is a flooring specialist with expertise in various wood types and installation methods. He has been in the industry for 15 years and has overseen hundreds of residential and commercial flooring projects.',
    category: 'Guides',
    coverImage: '/images/slider3.jpg',
    slug: 'choose-perfect-wood-flooring',
    tags: ['flooring', 'hardwood', 'guide', 'interior']
  },
  {
    id: 3,
    title: 'Maximizing Small Spaces: Design Tips',
    excerpt: 'Creative solutions and design strategies to make the most of small living spaces without compromising on style or functionality.',
    content: `
      <p>Small spaces present unique design challenges, but with thoughtful planning and creative solutions, even the tiniest rooms can become functional, comfortable, and stylish. Whether you're living in a compact apartment, a tiny house, or simply dealing with a small room in your home, these strategies will help you maximize your space.</p>
      
      <h2>Multi-Functional Furniture</h2>
      <p>In small spaces, every piece of furniture should earn its keep, ideally serving multiple purposes:</p>
      <ul>
        <li><strong>Sofa beds or futons</strong> provide seating by day and sleeping space by night</li>
        <li><strong>Storage ottomans</strong> offer a place to rest feet, extra seating, and hidden storage</li>
        <li><strong>Extendable dining tables</strong> can be compact for daily use and expanded for entertaining</li>
        <li><strong>Nesting tables</strong> can be separated when needed and stacked when not in use</li>
        <li><strong>Murphy beds</strong> fold up into the wall when not in use, freeing up floor space</li>
      </ul>
      
      <h2>Vertical Thinking</h2>
      <p>When floor space is limited, look upward:</p>
      <ul>
        <li>Install <strong>floor-to-ceiling bookshelves</strong> to maximize storage while drawing the eye upward</li>
        <li>Use <strong>wall-mounted desks</strong> that fold down when needed</li>
        <li>Hang <strong>floating shelves</strong> above doorways and windows for display and storage</li>
        <li>Consider a <strong>loft bed</strong> with desk or seating area underneath</li>
        <li>Install <strong>ceiling-mounted pot racks</strong> in kitchens to free up cabinet space</li>
      </ul>
      
      <h2>Strategic Color and Light</h2>
      <p>Color and lighting choices can significantly impact how spacious a room feels:</p>
      <ul>
        <li>Light colors generally make spaces feel larger, especially whites, creams, and pale blues</li>
        <li>Use the same color or closely related hues throughout a small space to create flow</li>
        <li>Incorporate mirrors to reflect light and create the illusion of more space</li>
        <li>Ensure adequate lighting with a mix of ambient, task, and accent lighting</li>
        <li>Consider light-filtering window treatments that maximize natural light while providing privacy</li>
      </ul>
      
      <h2>Smart Storage Solutions</h2>
      <p>Effective storage is essential in small spaces:</p>
      <ul>
        <li><strong>Under-bed storage containers</strong> utilize often-wasted space</li>
        <li><strong>Over-door organizers</strong> for shoes, accessories, or pantry items</li>
        <li><strong>Magnetic strips</strong> for knives and metal tools in kitchens</li>
        <li><strong>Furniture with built-in storage</strong>, such as beds with drawers or dining benches with storage</li>
        <li><strong>Pegboards</strong> for customizable wall storage in offices, kitchens, or craft areas</li>
      </ul>
      
      <h2>Visual Space-Expanding Tricks</h2>
      <p>Several design techniques can create the illusion of more space:</p>
      <ul>
        <li>Choose <strong>furniture with legs</strong> that allow you to see underneath, creating a sense of openness</li>
        <li>Opt for <strong>glass or acrylic furniture</strong> that doesn't visually take up much space</li>
        <li>Use <strong>large-scale art</strong> rather than multiple small pieces to reduce visual clutter</li>
        <li>Select <strong>furniture proportional to the space</strong>—oversized pieces can overwhelm small rooms</li>
        <li>Consider <strong>built-in furniture</strong> that fits perfectly into the space without awkward gaps</li>
      </ul>
      
      <h2>Room-Specific Solutions</h2>
      
      <h3>Small Kitchens</h3>
      <ul>
        <li>Install a <strong>pot filler faucet</strong> to eliminate carrying water from sink to stove</li>
        <li>Use <strong>drawer dividers</strong> to maximize organization</li>
        <li>Consider <strong>slimline appliances</strong> designed for compact spaces</li>
        <li>Install a <strong>pull-out pantry</strong> in narrow spaces between appliances or cabinets</li>
      </ul>
      
      <h3>Tiny Bathrooms</h3>
      <ul>
        <li>Install a <strong>corner sink</strong> to free up floor space</li>
        <li>Choose a <strong>sliding or pocket door</strong> instead of a swinging door</li>
        <li>Use a <strong>curved shower rod</strong> to create more space inside the shower</li>
        <li>Install <strong>towel bars on the back of the door</strong> or inside the shower</li>
      </ul>
      
      <h3>Small Bedrooms</h3>
      <ul>
        <li>Position the <strong>bed against a wall</strong> to free up floor space</li>
        <li>Use <strong>wall-mounted lighting</strong> instead of table lamps</li>
        <li>Install <strong>closet organizers</strong> to maximize storage efficiency</li>
        <li>Consider a <strong>headboard with storage</strong> for books and small items</li>
      </ul>
      
      <h2>Decluttering Strategies</h2>
      <p>Perhaps the most important aspect of small space living is maintaining control over possessions:</p>
      <ul>
        <li>Adopt a <strong>"one in, one out" policy</strong> for new purchases</li>
        <li>Regularly <strong>assess and donate</strong> items you no longer need or love</li>
        <li>Digitize <strong>papers, photos, and media</strong> when possible</li>
        <li>Be <strong>selective about decorative items</strong>—choose fewer, more meaningful pieces</li>
        <li>Consider <strong>seasonal rotation</strong> of clothing, decorations, and even furniture</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Small space living doesn't have to mean sacrificing style or comfort. With thoughtful planning, creative solutions, and a commitment to keeping only what you truly need and love, even the tiniest spaces can become functional, beautiful homes. Remember that in small spaces, every inch counts—so make each one work hard for you!</p>
    `,
    date: 'April 28, 2023',
    author: 'Neha Gupta',
    authorBio: 'Neha is an interior designer specializing in small space solutions. Her work has been featured in several design magazines, and she regularly consults on apartment and tiny home projects.',
    category: 'Tips & Tricks',
    coverImage: '/images/bedroom (1).jpg',
    slug: 'maximizing-small-spaces',
    tags: ['small spaces', 'interior design', 'storage', 'functionality']
  }
];

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  
  // Find the current blog post
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="heading">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="btn">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(item => item.category === post.category && item.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-end items-start pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-4">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
              <span className="mx-3 text-white">•</span>
              <span className="text-white">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <span className="text-white text-lg">By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      href={`/blog/tag/${tag}`}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors duration-300"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                    <p className="text-gray-600">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                {/* Recent Posts */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-serif font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map((recentPost) => (
                      <Link 
                        key={recentPost.id} 
                        href={`/blog/${recentPost.slug}`}
                        className="flex items-start group"
                      >
                        <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={recentPost.coverImage}
                            alt={recentPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium group-hover:text-accent transition-colors duration-300 line-clamp-2">{recentPost.title}</h4>
                          <p className="text-sm text-gray-600">{recentPost.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-serif font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {['Design Trends', 'Guides', 'Tips & Tricks', 'Design Theory', 'Sustainability', 'Workspace Design'].map((category) => (
                      <li key={category}>
                        <Link 
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Newsletter */}
                <div className="bg-accent text-white p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-bold mb-4">Subscribe</h3>
                  <p className="mb-4">Get the latest posts delivered straight to your inbox.</p>
                  <form>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md mb-3 text-gray-800 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-white text-accent font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="heading">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-60">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-accent text-sm">{relatedPost.category}</span>
                        <span className="mx-2 text-sm">•</span>
                        <span className="text-gray-600 text-sm">{relatedPost.date}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold mb-3">{relatedPost.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
