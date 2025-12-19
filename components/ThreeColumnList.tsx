/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */

interface Column {
  title: string;
  items: string[];
}

interface ThreeColumnListProps {
  columns: Column[];
}

export default function ThreeColumnList({ columns }: ThreeColumnListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
      {columns.map((column, index) => (
        <div key={index}>
          <h3 className="font-canela text-h2 font-medium mb-6">
            {column.title}
          </h3>
          <ul className="space-y-3">
            {column.items.map((item, itemIndex) => (
              <li 
                key={itemIndex}
                className="text-body text-ndg-subtle"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
