import { CircleHelp } from "lucide-react";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ActionProps, DescriptionProps, RootProps } from "./types";

export const AutoRemarkRoot = ({ children }: RootProps) => {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            학생 특이사항 초기화
          </h1>
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleHelp />
            </TooltipTrigger>
            <TooltipContent>
              <p>최대 5000건을 조회합니다.</p>
            </TooltipContent>
          </Tooltip>
        </div>
        {children}
      </div>
    </TooltipProvider>
  );
};

export const AutoRemarkDescription = ({ date, count }: DescriptionProps) => {
  const { start, end } = date;
  const { total, status } = count;

  return (
    <div>
      <p className="text-lg text-muted-foreground">
        중단 요청서 제출 대상자 목록을 조회하여 전 과목이 중단된 학생의
        특이사항을 초기화하는 기능입니다.
      </p>

      {start && (
        <div className="my-2">
          <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
            조회기간
          </h1>
          <p className="text-lg text-muted-foreground">
            중단 요청서 제출 날짜:
            <span className="text-slate-900">
              {start} ~ {end} 까지
            </span>
          </p>
          <p className="text-lg text-muted-foreground">
            총 조회 유저: <span className="text-slate-900">{total} 명</span>
          </p>

          <p className="text-lg text-muted-foreground">
            초기화 대상 유저 :{" "}
            <span className="text-slate-900">{status} 명</span>
          </p>
        </div>
      )}
    </div>
  );
};

export const AutoRemarkAction = ({ loading, handleClick }: ActionProps) => {
  return (
    <AlertDialog>
      <div className="flex items-center justify-end gap-2">
        {/* {process.env.NEXT_PUBLIC_MODE_DESC !== "production" && (
          <Button onClick={handleClick} disabled={loading} value="dummy">
            특이사항 추가
          </Button>
        )} */}
        <AlertDialogTrigger asChild>
          <Button variant="outline" disabled={loading}>
            초기화
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>학생 특이사항 초기화</AlertDialogTitle>
            <AlertDialogDescription>
              초기화하면 기존 존재하던 특이사항 내역은 복구할 수 없습니다.
              진행하시겠습니까?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleClick} value="init">
              초기화
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </div>
    </AlertDialog>
  );
};

export { AutoRemarkDataTable } from "./data-table";
