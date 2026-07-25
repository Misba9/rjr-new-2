import { Calendar, User, ChevronRight, BookOpen } from 'lucide-react';
import { buildHubPageSchemas } from '../utils/seo';
import { getPageSeo } from '../constants/pageSeo';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const blogSeo = getPageSeo('blog');

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
      <SEOHead {...blogSeo} />
      <JsonLd
        data={buildHubPageSchemas({
          pageKey: 'blog',
          name: 'RJR Safety Nets Blog',
          description: blogSeo.description,
          type: 'Blog',
          breadcrumbName: 'Blog',
        })}
      />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <BookOpen className="mx-auto mb-6 text-blue-700" size={64} aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              RJR Safety Nets Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert advice, installation guides, and safety tips from Bangalore's leading safety net specialists
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" aria-labelledby="blog-articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-articles-heading" className="sr-only">
            Latest articles
          </h2>
          <ul className="mb-12 flex flex-wrap justify-center gap-3" aria-label="Article categories">
            {categories.map((category) => (
              <li key={category}>
                <span className="inline-block rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-sm">
                  {category}
                </span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
                    <span className="rounded-full bg-blue-100 px-3 py-1">{post.category}</span>
                    <span className="text-gray-700">{post.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{post.title}</h3>
                  <p className="mb-4 leading-relaxed text-gray-700">{post.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} aria-hidden="true" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} aria-hidden="true" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 font-semibold text-blue-700" aria-hidden="true">
                      Read More <ChevronRight size={20} aria-hidden="true" />
                    </span>
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

      <section className="py-16 bg-white" aria-labelledby="blog-services-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="blog-services-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Explore our safety net services
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            From balcony and bird nets to children and construction netting — jump to the service you need.
          </p>
          {onNavigate ? (
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                All services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('balcony')}
                className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-blue-300"
              >
                Balcony nets
              </button>
              <button
                type="button"
                onClick={() => onNavigate('pigeon')}
                className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-blue-300"
              >
                Pigeon / bird nets
              </button>
              <button
                type="button"
                onClick={() => onNavigate('children')}
                className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-blue-300"
              >
                Children nets
              </button>
              <button
                type="button"
                onClick={() => onNavigate('construction')}
                className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-blue-300"
              >
                Construction nets
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="pb-16 bg-white" aria-labelledby="blog-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="blog-cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
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
