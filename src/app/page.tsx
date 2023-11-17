"use client";

import resume1 from "@/const/resume1";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [downloadlink, setDownloadLink] = useState("");
  
  const getLink = useCallback(async () => {
    const res = await fetch("/api", {
      method: "get",
    });
    setDownloadLink(JSON.stringify(res));
  }, []);

  return (
    <main className="flex min-h-screen text-black flex-col items-center justify-between p-24 bg-white">
      <textarea className=" w-2/3 h-96 text-black " value={JSON.stringify(resume1)}></textarea>
      <a href="">Go to Canva</a>
      <button onClick={getLink}>Download</button>
      <p>
        <span>Download link</span> {downloadlink}
      </p>
    </main>
  );
}
