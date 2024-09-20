"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

export function FancyMultiSelect({ products, selectedProducts, setSelectedProducts }:any) {
  const inputRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((product:any) => {
    setSelectedProducts((prev:any) => prev.filter((p:any) => p.id !== product.id));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      const input = inputRef.current;
      if (input && (e.key === "Delete" || e.key === "Backspace")) {
        if ((input as HTMLInputElement).value === "") {
          setSelectedProducts((prev: any) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      if (input && e.key === "Escape") {
        (input as HTMLInputElement).blur();
      }
    },
    [setSelectedProducts]
  );
  

  const selectables = products.filter(
    (product:any) => !selectedProducts.includes(product)
  );

  return (
    <div>
      <h2 className="text-lg text-black font-semibold mb-4">Banner Products</h2>
      <Command
        onKeyDown={handleKeyDown}
        className="overflow-visible bg-transparent mb-3"
      >
        <div className="group rounded-md border-2 border-[#3730a3] border-input px-3 py-4 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 mb-2">
          <div className="flex flex-wrap gap-1">
            {selectedProducts.map((product:any) => (
              <Badge key={product.id} className="!py-2 bg-white " variant="secondary">
                {product.title}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(product);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(product)}
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            ))}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder="Select products..."
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground mt-4 rounded-md"
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && selectables.length > 0 ? (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                <CommandGroup className="h-full overflow-auto">
                  {selectables.map((product:any) => (
                    <CommandItem
                      key={product.id}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        setInputValue("");
                        setSelectedProducts((prev:any) => [...prev, product]);
                      }}
                      className={"cursor-pointer"}
                    >
                      {product.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            ) : null}
          </CommandList>
        </div>
      </Command>
    </div>
  );
}
