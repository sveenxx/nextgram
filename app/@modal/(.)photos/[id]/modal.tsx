'use client';

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetClose
} from "@/components/ui/sheet";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    if (!isSheetOpen) {
      setIsSheetOpen(true);
    }
  }, []);

  function onDismiss() {
    setIsSheetOpen(false);
    setTimeout(() => {
      router.back();
    }, 400);
  }

  return <Sheet open={isSheetOpen}>
    <SheetContent>
      <SheetClose>
        <button onClick={onDismiss}>Close</button>
      </SheetClose>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          {children}
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

}
