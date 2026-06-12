import { MainNavigation } from '../../design-system/components';

interface MainNavProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function MainNav({ searchQuery, onSearchChange }: MainNavProps) {
  return (
    <MainNavigation
      productName="Installed Base Intelligence"
      searchQuery={searchQuery}
      userName="Anna Utz"
      userInitials="AU"
      onSearchChange={onSearchChange}
    />
  );
}
