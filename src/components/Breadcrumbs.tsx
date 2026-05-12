import type { PageKey } from '../constants/routes';

export type BreadcrumbItem = {
  name: string;
  href: string;
  page?: PageKey;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  onNavigate?: (page: string) => void;
  className?: string;
};

export default function Breadcrumbs({ items, onNavigate, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-400" aria-hidden="true">/</span>}
              {isLast ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : item.page && onNavigate ? (
                <a
                  href={item.href}
                  className="text-blue-700 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.page!);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <a href={item.href} className="text-blue-700 hover:underline">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
