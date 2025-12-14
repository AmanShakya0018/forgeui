"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import "./security-card.css";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "motion/react";

type SecurityCardProps = {
  delay?: number;
  name?: string;
  email?: string;
};

const SecurityCard = ({
  delay = 5000,
  name = "Liam Parker",
  email = "liam.parker@example.com",
}: SecurityCardProps) => {
  const [animationKey, setAnimationKey] = useState(0);
  const delayTime = Math.max(delay, 5000);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, delayTime);

    return () => clearInterval(interval);
  }, [delayTime]);

  return <Securitycard name={name} email={email} key={animationKey} />;
};
export default SecurityCard;

const Securitycard = ({ name, email }: { name: string; email: string }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "flex h-[27rem] w-full max-w-[350px] items-center justify-center",
        "rounded-md border border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900",
        "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]",
      )}
    >
      <InfiniteScrambler />
      <ContainerMask />
      <div
        className={cn(
          "absolute bottom-0 h-1/2 w-[150%] rounded-t-[60%]",
          "bg-gradient-to-b from-neutral-200 to-neutral-50 shadow-[0_0_900px_rgba(250,250,250,0.9)]",
          "dark:from-neutral-800 dark:to-neutral-950 dark:shadow-[0_0_900px_rgba(10,10,10,0.9)]",
        )}
      />
      <div className="absolute top-[70%] flex h-12 w-full flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center text-xs text-primary">
          <motion.p
            initial={{
              x: 8,
            }}
            animate={{
              x: -2,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.8,
            }}
          >
            {name}
          </motion.p>
          <CheckCircle />
        </div>
        <div className="no-ios-link text-[10px] text-neutral-500">{email}</div>
      </div>
      <div className="relative rounded-[2px] bg-neutral-300/50 px-[3px] py-[3.2px] dark:bg-neutral-950/50">
        <div className="relative h-32 w-24 rounded-[2px] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800">
          <FaceCard />
        </div>
      </div>
      <div className="absolute left-0 top-0 hidden h-[200px] w-full [background-image:linear-gradient(to_bottom,rgb(23,23,23)_30%,transparent_100%)] dark:block" />
      <div className="absolute left-0 top-0 block h-[200px] w-full [background-image:linear-gradient(to_bottom,rgb(245,245,245)_30%,transparent_100%)] dark:hidden" />
      <div className="absolute left-0 top-4 w-full px-3">
        <h3 className="text-sm font-semibold text-primary">
          Smart Access Control
        </h3>
        <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
          Evaluate each login based on real-time signals like IP, device
          history, and context before allowing access intelligently.
        </p>
      </div>
    </div>
  );
};

const FaceCard = () => {
  return (
    <svg
      viewBox="0 0 80 96"
      fill="none"
      className="absolute inset-0 h-full w-full"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path
        d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
        className="stroke-neutral-500 dark:stroke-neutral-900"
      ></path>
      <path
        d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
        className="stroke-neutral-500 dark:stroke-neutral-900"
      />
      <path
        d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
        className="animate-draw-outline stroke-[#06b6d4] [filter:drop-shadow(0_0_6px_#06b6d4)]"
      ></path>
      <path
        d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
        className="animate-draw stroke-[#06b6d4] [filter:drop-shadow(0_0_6px_#06b6d4)]"
      />
    </svg>
  );
};

const CheckCircle = () => {
  return (
    <div className="relative">
      <svg width="18" height="18">
        <motion.circle
          cx="9"
          cy="9"
          r="6"
          fill="#06b6d4"
          className="rounded-full [filter:drop-shadow(0_0_1px_#06b6d4)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 2.3,
          }}
        />
      </svg>
      <motion.div
        className="absolute left-[5px] top-[5px] flex items-center justify-center text-white dark:text-black"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 2.4,
        }}
      >
        <IoMdCheckmark className="size-2" />
      </motion.div>
    </div>
  );
};

const SCRAMBLED_STRINGS = [
  "6*7A0^!HIETD@6XS749%2$4L4RO$SH*8W#6OPLLF%WSKVI^PTT1PJUOS60EQL$*K53*Y#AK5GDM6XIWX79XR^DQOMEJF$F1ZNL*L0Z&#LJ4B$E97Q76VF0U#HY!37J5$GKCI0RMK$2P1F9JJYGVR@IAHYPZALXQMJ!519!GZTQSA$#BEXUYPSZ302Z*&DDWW!NI61S#!MAHJ0Y&3J8*EBIMM$#X%46NJ0*9P3L@UW5A8NCZX&98CQ75NL9XEH11NBB^E&LQ1YPZALMJ3DSUXBS9*DADQ7ND0SCI#HY!37J5$GKKAUGDYE@#8CBDUFA9#3EYGVR@IAHZCUKIYPZALX#3EYZX&98CQ75NL9XJ4B$E97Q76VF0LKU8S5KVSD9$#BEX2Z9HSABIU#CSDK@SN!",

  "Y4#!I*ZO1QCFU07QJFDVW#6$17$WW^#7MR5Q50I^2FFKJQW1&1%94ABU&$TX$RRTXT3P!4JPK3^A12&DQ15S08%Q^X*GUE761@6S5DA*HACX9@AS3B04YQ5*VD1*$XX9ECF4B9%O^^LGNDKT%FT2Y2SDC0M!GCNSPVWVNBAWEPT3Q2XK6M877&Q838ZWKGW8*SVG241H51EB2SU1QZL56OR44Q$95ZEDFOVS#AL@C%FEYKZEPI*F&EQUT^65O68J3Q9O^YACNTNVMAK4S#MRM!V@GOKPV0HO2IN$3501P^Y9K3UJ9%LFHMQTJK49A@&84HNFS9IYB@KMEBHIWPSD06$XL8@1A*5OMD!XW8#N7F&MM9R%6E&V&L$^J$8YMANP2TSIP3POYC!I!EER#JBFF",

  "4HM5$8&ZBKCL0G$2ZE7OAZHBUDZXDJW81WD7YDH7##HO7VM84J&@&PV^7YACYLRBWI2HDUW9@!I#H@3%HN%AD@!ED0FOPL#4N8X%LO31#T9N1!HWCAP9DY!KQ5AEMFLF6#DK#4AX70^HXSGH2Y1XJCALNF5XYZ0L28%THU@X&83MKC4R%LZ1J8B86NW1Z$Q8^6J6FP&%PXQ7#LUHV21UM^3K%LYDYO2KWZT!3&WB51UJXJ2Y8!$D7G54RUZEI78^G&1MD%8*5NGKU201%G@FY@CE8$4BG!YEBNCR0YLP@D!W@EU*3II2U8N^9*XZD^^R0BHBP7$7HV0P8F$!XVGWULL4YUDH#MQLQQE8A1&UW0HG42^SVEE3PP9XLURVKU8$OZ!0DV0X!@NHGNFG!I9KF",

  "IZE$@GCC&9OEB%@LLRX%IJ!VILBQ$%K#XALOTXTQD1%J82QSFUS512FRQHSO@#R#MK0C0@686S$XS1EPS0YLQ!%TL374LL#Y@DL4&1G85XA6S59K99DWZ8@LEVWAK94Y99VDSXS^V$71J092U2V#AB*@*45AZXIGVM^08V1&F1#!ST5PP7WBR*RE1SZ%UCJNMHP#^DJ0O1JAZIGPB7%V7DBQ^CKZ^6B^Q510BMK8Y3TA&@HZAHYCMG1J9Y1FOQ2TS3M$A@R%5^X$71W@N@%&W100&7768Q3!8V2F6K8#R^X!3VZ^GUHQ#3%BUSASCQL1#C4#AJ5RQJ1ITY%CZVD$$EZP!QRML2FOU%M9OH#17#I&H4SLS8U0E9%L^MDYEWYCUL*RXKYHKB$A7PZ10AB6^",
];
const InfiniteScrambler = () => {
  const [text, setText] = useState(SCRAMBLED_STRINGS[0]);
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % SCRAMBLED_STRINGS.length;
      setText(SCRAMBLED_STRINGS[index.current]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[15%] max-w-[322px]">
      <p className="leading-2 whitespace-normal break-words font-mono text-[13px] text-neutral-500 opacity-35">
        {text}
      </p>
    </div>
  );
};

const ContainerMask = () => {
  return (
    <>
      <div className="absolute left-0 top-0 hidden h-full w-[80px] [background-image:linear-gradient(to_right,rgb(23,23,23)_20%,transparent_100%)] dark:block" />
      <div className="absolute left-0 top-0 block h-full w-[80px] [background-image:linear-gradient(to_right,rgb(245,245,245)_20%,transparent_100%)] dark:hidden" />
      <div className="absolute right-0 top-0 hidden h-full w-[80px] [background-image:linear-gradient(to_left,rgb(23,23,23)_20%,transparent_100%)] dark:block" />
      <div className="absolute right-0 top-0 block h-full w-[80px] [background-image:linear-gradient(to_left,rgb(245,245,245)_20%,transparent_100%)] dark:hidden" />
    </>
  );
};
