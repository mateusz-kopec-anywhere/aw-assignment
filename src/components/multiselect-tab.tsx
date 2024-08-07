'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface IMultiSelectTabProps {
  tabItems: Array<IMultiSelectItem>;
};

interface IMultiSelectItem {
  id: number;
  label: string;
};

export const MultiSelectTab = ({ tabItems }: IMultiSelectTabProps) => {

  const router = useRouter();
  const pathname = usePathname();

  const [totalSelectedItems, setTotalSelectedItems] = useState<Array<string>>([]);

  const tabSelectHandler = (tabName: string): void => {
    const updatedTabItems = 
      totalSelectedItems?.includes(tabName)
        ? totalSelectedItems.filter(tabItem => tabItem !== tabName)
        : [...totalSelectedItems, tabName];
    setTotalSelectedItems(updatedTabItems);
    const queryParams = new URLSearchParams();
    queryParams.set("category", JSON.stringify(updatedTabItems));
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <div className='gap-4 pb-20 pt-10 text-base lg:text-sm hidden lg:relative lg:flex'>
      <h2
        className="text-lg text-gray-900 font-strong dark:text-white"
      >
        Categories
      </h2>
      <ul
        className='flex flex-col gap-2 list-none mt-2'
        role='list'
      >
        {
          tabItems.map((tabItem) => (
            <li
              className={`
                flex h-10 w-full p-4 cursor-pointer rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600
                ${totalSelectedItems.includes(tabItem.label.toLowerCase()) && 'bg-gray-800'}
              `}
              key={tabItem.id}
              onClick={() => tabSelectHandler(tabItem.label.toLowerCase())}
            >
              <span className='items-center'>
                {tabItem.label}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
};
