'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/lib/constants/categories';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function Home() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = React.useState(
    categories[0].id,
  );
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedItems =
    categories.find((cat) => cat.id === selectedCategory)?.items || [];

  return (
    <div className="flex min-h-screen">
      {/* 모바일 선택기 */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-background border-b">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="카테고리 선택" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  <div className="flex items-center gap-2">
                    {category.icon}
                    {category.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* 데스크톱 사이드바 */}
      {!isMobile && (
        <div className="w-64 border-r p-4 space-y-4">
          {categories.map((category) => (
            <Collapsible
              key={category.id}
              open={selectedCategory === category.id}
              onOpenChange={() => setSelectedCategory(category.id)}
            >
              <CollapsibleTrigger className="flex items-center gap-2 w-full p-2 hover:bg-muted rounded-md">
                {category.icon}
                <span>{category.label}</span>
              </CollapsibleTrigger>
            </Collapsible>
          ))}
        </div>
      )}

      {/* 메인 콘텐츠 */}
      <div className={`flex-1 p-4 ${isMobile ? 'mt-16' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedItems.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => router.push(`/instructor/${item.slug}`)}
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
