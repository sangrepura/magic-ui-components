import firstGridImg from "../../../src/assets/dark-grid-1.jpg";
import secondGridImg from "../../../src/assets/dark-grid-2.jpg";
import thirdGridImg from "../../../src/assets/dark-grid-3.jpg";
import { Image as FallbackImage, ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { FC, ReactNode } from "react";

interface BentoGridContainerProps {
  children: ReactNode;
  className?: string;
}

export const BentoGridContainer: FC<BentoGridContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50 p-1 h-fit",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BendroGridLayoutProps {
  children: ReactNode;
  className?: string;
}

export const BendroGridLayout: FC<BendroGridLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-5 items-center justify-between h-full w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridImageProps {
  children: ReactNode;
  className?: string;
}

export const BentoGridImage: FC<BentoGridImageProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-transparent flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridContentProps {
  children: ReactNode;
  className?: string;
}

export const BentoGridContent: FC<BentoGridContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn("px-5 pb-4 flex flex-col gap-y-1 items-start", className)}
    >
      {children}
    </div>
  );
};

// make this copy and pastable to add this whole bentogrid component to another file
export default function GridComponent5() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* 1 */}
        <BentoGridContainer>
          <BendroGridLayout>
            <BentoGridImage>
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </BentoGridImage>
            <BentoGridContent>
              <h2 className="font-semibold text-xl dark:text-neutral-200">
                No more rehydration or cold storage
              </h2>
              <p className="dark:text-neutral-200/50 text-neutral-800 font-normal text-base">
                Customize retention per source to retain and query everything
                you want. No need to archive your logs to S3 anymore. Search all
                your logs anytime
              </p>
              <a
                href="#"
                className="text-indigo-500 group font-normal text-base pt-2 hover:underline underline-offset-8 underline-indigo-500"
              >
                Explore Dashboards
                <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-all duration-150 ease-linear" />
              </a>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
        {/* 2 */}
        <BentoGridContainer>
          <BendroGridLayout>
            <BentoGridImage>
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </BentoGridImage>
            <BentoGridContent>
              <h2 className="font-semibold text-xl dark:text-slate-200">
                No more rehydration or cold storage
              </h2>
              <p className="dark:text-neutral-200/50 text-neutral-800 font-normal text-base">
                Customize retention per source to retain and query everything
                you want. No need to archive your logs to S3 anymore. Search all
                your logs anytime
              </p>
              <a
                href="#"
                className="text-indigo-500 group font-normal text-base pt-2 hover:underline underline-offset-8 underline-indigo-500"
              >
                Explore Dashboards
                <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-all duration-150 ease-linear" />
              </a>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
        {/* 3 */}
        <BentoGridContainer className="md:col-span-2">
          <BendroGridLayout className=" grid lg:grid-cols-2">
            <BentoGridImage className="w-full rounded-lg lg:order-2">
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </BentoGridImage>
            <BentoGridContent className="w-full px-5 py-6 md:px-10 flex flex-col gap-y-1 items-start justify-center">
              <h2 className="font-semibold text-xl dark:text-slate-200">
                No more rehydration or cold storage
              </h2>
              <p className="dark:text-neutral-200/50 text-neutral-800 fomint-normal text-base">
                Customize retention per source to retain and query everything
                you want. No need to archive your logs to S3 anymore. Search all
                your logs anytime
              </p>
              <a
                href="#"
                className="text-indigo-500 group font-normal text-base pt-2 hover:underline underline-offset-8 underline-indigo-500"
              >
                Explore Dashboards
                <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-all duration-150 ease-linear" />
              </a>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
      </div>
    </section>
  );
}
