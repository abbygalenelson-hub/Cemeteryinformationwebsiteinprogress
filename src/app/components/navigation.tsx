import { Link, useNavigate } from 'react-router';
import { Menu, MapIcon, List, BookOpen, Users, TreeDeciduous, Radio, ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export function Navigation() {
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Cemetery Map', icon: MapIcon },
    { path: '/plots', label: 'All Plots', icon: List },
    { path: '/deceased', label: 'The Dead', icon: Users },
    { path: '/gallery', label: 'Gallery', icon: ImageIcon },
    { path: '/history', label: 'History', icon: BookOpen },
    { path: '/family-trees', label: 'Family Trees', icon: TreeDeciduous },
    { path: '/ground-penetrating-radar', label: 'Ground Penetrating Radar', icon: Radio },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                onClick={() => navigate(item.path)}
                className="gap-2 mr-2 text-center px-[20px] py-[12px]"
              >
                <item.icon className="size-4" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      variant="ghost"
                      onClick={() => navigate(item.path)}
                      className="justify-start gap-2"
                    >
                      <item.icon className="size-4" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}