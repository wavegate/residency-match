import { Check, ChevronsUpDown, Hospital, Loader } from "lucide-react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandItem,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { cn } from "../lib/utils";
import client from "../utils/client";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

export default function SelectProgram({
  programId,
  setProgramId,
  setTab,
  programValue,
  setProgramValue,
}) {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data: programs, isLoading: loading } = useQuery({
    queryKey: ["programsSearch", debouncedSearch],
    queryFn: async () => {
      const response =
        await client.models.Program.listProgramBySortTypeAndInstitutionNameLowerCase(
          {
            sortType: "Program",
            institutionNameLowerCase: {
              beginsWith: debouncedSearch
                ? debouncedSearch.toLowerCase()
                : undefined,
            },
          },
          {
            selectionSet: ["institution.*", "id", "name"],
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          <span className={`max-w-[50px] sm:max-w-[200px] truncate`}>
            {programValue || (
              <>
                <Hospital
                  className={`sm:hidden`}
                  color="#707070"
                  strokeWidth={1.5}
                />
                <span className={`hidden sm:inline`}>Select program</span>
              </>
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder="Search by institution name..."
            value={search}
            onValueChange={(value) => setSearch(value)}
          />
          <CommandList>
            {loading && (
              <div className={`relative h-12`}>
                <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
                  <Loader className={`animate-spin`} />
                </div>
              </div>
            )}
            <CommandEmpty>No programs found.</CommandEmpty>

            {programs?.map((program) => (
              <CommandItem
                key={program.id}
                value={`${program.name} at ${program.institution.name}`}
                onSelect={(currentValue) => {
                  if (setProgramValue) {
                    setProgramValue(
                      currentValue === programValue ? "" : currentValue
                    );
                  }
                  if (setProgramId) {
                    setProgramId(
                      currentValue === programValue ? "" : program.id
                    );
                  }
                  if (setTab) {
                    setTab(currentValue === programValue ? "all" : "program");
                  }
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    programId === program.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {`${program.name} at ${program.institution.name}`}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
