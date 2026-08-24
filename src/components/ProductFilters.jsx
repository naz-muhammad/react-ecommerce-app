import React, { useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";

function ProductFilters({
  searchInput,
  onSearchChange,
  maxPrice,
  greatest,
  onPriceChange,
  selectCategory,
  onCategoryChange,
  uniqueCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">

        {/* Always-visible row: search + mobile filter toggle */}
        <div className="flex items-center gap-3">

          <div className="relative flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              placeholder="Search products…"
              value={searchInput}
              onChange={onSearchChange}
              className="w-full rounded-lg border border-line bg-surface-raised py-2.5 pl-9 pr-3
                         font-sans text-sm text-paper placeholder-muted
                         outline-none transition focus:border-brass"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-lg border border-line px-3 py-2.5
                       font-sans text-sm text-muted transition hover:border-brass hover:text-paper sm:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Category + price: collapsible on mobile, always visible on desktop */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } mt-3 flex-col gap-3 sm:mt-3 sm:flex sm:flex-row sm:items-center sm:gap-4`}
        >
          <select
            value={selectCategory}
            onChange={onCategoryChange}
            className="rounded-lg border border-line bg-surface-raised px-3 py-2.5
                       font-sans text-sm text-paper outline-none transition
                       focus:border-brass sm:w-48"
          >
            <option>All Categories</option>
            {uniqueCategory?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <div className="flex flex-1 items-center gap-3 rounded-lg border border-line bg-surface-raised px-3 py-2.5">
            <span className="whitespace-nowrap font-mono text-xs text-brass">
              PKR {maxPrice}
            </span>
            <input
              type="range"
              min={0}
              max={greatest}
              value={maxPrice}
              onChange={onPriceChange}
              className="w-full flex-1 cursor-pointer accent-brass"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;