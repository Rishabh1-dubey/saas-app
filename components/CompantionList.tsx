import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import Image from "next/image";
import { cn, getSubjectColor } from "@/lib/utils";


interface CompanionListProps {
  title: string;
  companions?: Companion[];
  className?: string;
}

const CompantionList = ({
  title,
  companions,
  className,
}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", className)}>
      <h2 className="font-bold text-3xl"> Recent Session</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3 text-lg">Lessons</TableHead>
            <TableHead className="text-lg">Subjects</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-lg">{name}</p>
                      <p className="text-sm">Topic: {topic}</p>
                    </div>
                  </div>
                </Link>
                {/* ------------- */}


              </TableCell>
              <TableCell>
                <div className="bg-black text-white rounded-3xl text-sm px-3 py-1 capitalize w-fit max-md:hidden">{subject}</div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
                   <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                </div>
              </TableCell>



              {/* ---------------- */}
             <TableCell>
               <div className="flex items-center w-full gap-2 justify-end">
                <p className="text-lg">{duration}{''}</p>
                <span className="max-md:hidden capitalize">min</span>
                <Image
                  src="/icons/clock.svg"
                  alt="duration"
                  width={13.5}
                  height={13.5}
                  className="md:hidden"
                />
                {/* <p className="text-sm">{duration} </p> */}
              </div>
             </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  );
};

export default CompantionList;
