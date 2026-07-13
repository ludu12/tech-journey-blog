'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {clsx} from "@/utils/styles";

interface PokemonTabsProps {
  generations: number[]
}

const PokemonTabs: React.FC<PokemonTabsProps> = ({generations}) => {
  const pathname = usePathname()

  return (
      <div className="tabs tabs-lift tabs-lg">
        {generations.map(gen => {
          const href = `/pokemon/${gen}`;
          return (
              <Link key={gen} className={clsx('tab', {'tab-active': href === pathname})} href={href}>
                Gen {gen}
              </Link>
          )
        })}

      </div>
  );
};
export default PokemonTabs;
