import { ReactNode } from "react";

interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => ReactNode;
}

interface AdminTableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: (item: T) => ReactNode;
}

function AdminTable<T extends { id: string }>({ columns, data, actions }: AdminTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted">
            {columns.map((col) => (
              <th key={col.key} className="text-left px-4 py-3 font-display font-semibold text-foreground whitespace-nowrap">
                {col.label}
              </th>
            ))}
            {actions && <th className="text-left px-4 py-3 font-display font-semibold text-foreground">Ações</th>}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="text-center py-8 text-muted-foreground">
                Nenhum registro encontrado.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="border-t border-border hover:bg-accent/50 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-foreground whitespace-nowrap">
                    {col.render ? col.render(item) : (item as Record<string, unknown>)[col.key] as ReactNode}
                  </td>
                ))}
                {actions && <td className="px-4 py-3">{actions(item)}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
