import { useEffect } from 'react';
import { Calendar, User, ChevronRight, BookOpen } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export default function BlogPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Safety Nets Blog - Tips, Guides & News | RJR Safety Nets',
      description: 'Read expert articles, installation guides, and safety tips from RJR Safety Nets. Stay informed about safety net solutions in Bangalore.',
      keywords: 'Safety Nets Blog, Safety Tips Bangalore, Installation Guides, Safety Net Articles',
      canonical: 'https://www.rjrsafetynets.in/blog',
      ogTitle: 'RJR Safety Nets Blog | Tips, Guides & Updates',
      ogDescription: 'Expert articles on balcony nets, pigeon control, children safety, sports and construction netting in Bengaluru.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'RJR Safety Nets Blog',
      description: 'Expert articles and guides on safety net solutions',
      publisher: {
        '@type': 'Organization',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
      },
    });
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Complete Guide to Choosing the Right Safety Nets for Your Balcony',
      excerpt: 'Learn about different types of balcony safety nets, material quality, mesh sizes, and how to select the perfect solution for your home based on your specific needs.',
      date: 'November 20, 2025',
      author: 'RJR Safety Team',
      category: 'Installation Guides',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Why Every Apartment in Bangalore Needs Pigeon Safety Nets',
      excerpt: 'Discover the health hazards of pigeon droppings, property damage costs, and how anti-pigeon nets provide an effective, humane solution for apartment dwellers.',
      date: 'November 18, 2025',
      author: 'RJR Safety Team',
      category: 'Safety Tips',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Child Safety at Home: Essential Tips for Parents',
      excerpt: 'Comprehensive safety checklist for parents including window protection, balcony safety nets, staircase barriers, and creating a child-proof environment.',
      date: 'November 15, 2025',
      author: 'RJR Safety Team',
      category: 'Safety Tips',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Invisible Grills vs Traditional Grills: A Complete Comparison',
      excerpt: 'Detailed comparison covering aesthetics, security, ventilation, maintenance, and cost-effectiveness to help you make an informed decision for your property.',
      date: 'November 12, 2025',
      author: 'RJR Safety Team',
      category: 'Product Guides',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'How to Maintain Your Safety Nets for Long-Lasting Protection',
      excerpt: 'Expert maintenance tips including cleaning procedures, inspection schedules, weather protection, and signs that indicate it\'s time for replacement.',
      date: 'November 10, 2025',
      author: 'RJR Safety Team',
      category: 'Maintenance',
      readTime: '4 min read',
    },
    {
      id: 6,
      title: 'Construction Site Safety: Legal Requirements in Bangalore',
      excerpt: 'Understanding OSHA standards, local safety regulations, mandatory safety net installations, and compliance requirements for construction projects.',
      date: 'November 8, 2025',
      author: 'RJR Safety Team',
      category: 'Industry News',
      readTime: '8 min read',
    },
    {
      id: 7,
      title: 'Setting Up a Home Cricket Practice Net: Complete Guide',
      excerpt: 'Step-by-step guide to creating your own cricket practice area including space requirements, net specifications, installation process, and cost breakdown.',
      date: 'November 5, 2025',
      author: 'RJR Safety Team',
      category: 'Installation Guides',
      readTime: '6 min read',
    },
    {
      id: 8,
      title: 'Monkey Menace in Bangalore: Effective Protection Strategies',
      excerpt: 'Understanding monkey behavior, common problems faced, comparison of different protection methods, and why safety nets are the most effective solution.',
      date: 'November 3, 2025',
      author: 'RJR Safety Team',
      category: 'Safety Tips',
      readTime: '5 min read',
    },
    {
      id: 9,
      title: 'Understanding HDPE Material: Why It\'s Perfect for Safety Nets',
      excerpt: 'Deep dive into HDPE properties, UV stabilization, tensile strength, weather resistance, environmental impact, and longevity compared to other materials.',
      date: 'November 1, 2025',
      author: 'RJR Safety Team',
      category: 'Product Guides',
      readTime: '5 min read',
    },
  ];

  const categories = ['All Posts', 'Installation Guides', 'Safety Tips', 'Product Guides', 'Maintenance', 'Industry News'];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <BookOpen className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              RJR Safety Nets Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert advice, installation guides, and safety tips from Bangalore's leading safety net specialists
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="px-6 py-2 rounded-full bg-white text-gray-700 font-medium hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-3">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
                    >
                      Read More <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Safety Net Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our experts for free consultation and professional installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
