import BlogPostDisplay from './BlogPostDisplay';
import { notFound } from 'next/navigation';

// Mock blog posts data
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
      <p>Before diving into selection criteria, it's essential to understand the main types of wood flooring available:</p>
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
      <p>Effective storage is crucial in small spaces. Get creative with how you store your belongings:</p>
      <ul>
        <li>Utilize <strong>under-bed storage</strong> with drawers or bins</li>
        <li>Install <strong>corner shelving</strong> to make use of awkward spaces</li>
        <li>Use <strong>door-mounted organizers</strong> for shoes, accessories, or pantry items</li>
        <li>Invest in <strong>modular storage systems</strong> that can be configured to your needs</li>
        <li>Declutter regularly and only keep what you truly need and love</li>
      </ul>
      <h2>Specific Room Strategies</h2>
      <h3>Living Area</h3>
      <ul>
        <li>Choose <strong>furniture with exposed legs</strong> to create a sense of openness</li>
        <li>Opt for a <strong>loveseat or compact sectional</strong> instead of a bulky sofa</li>
        <li>Use <strong>transparent furniture</strong> (like acrylic coffee tables) to reduce visual clutter</li>
        <li>Mount your TV on the wall to save floor space</li>
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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}
