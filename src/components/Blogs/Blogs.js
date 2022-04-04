import React from "react";

const Blogs = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h1 className="text-center text-3xl font-bold">
        Answering the question:
      </h1>
      <div className="w-[900px] shadow-2xl mt-5 p-5  bg-red-50">
        <h1 className="text-xl font-bold mb-4">Q1: What is Contex API?</h1>
        <p>
          <strong>Answer:</strong>
          রিয়েক্ট এটিআই হলো প্রোপস ড্রিলিংকে সহজ করে প্রকাশ। এটির মাধ্যমে আমরা
          একই ধরণের প্রোপসকে বার বার ডিক্লেয়ার না করে এবং চেইন এর মতো ব্যাবহার
          না করে সরাসর প্রয়োজনীয় প্রোপস কে যেকোন কম্পোনেন্ট এ পাঠিয়ে দিতে পারি।
          এটি আমার ডেবেলপারদের জন্য অনেক উপকারি একটা ষ্টেট। এটিতে provider and
          useContext ব্যাবহার রের মাধ্যমে আমরা এক কম্পােন্টে থেকে প্রোপস কে
          পাঠাতে পারি এর্বং অন্যদিকে পেতে পারি। শুধূ parents নয় grandpa তে ও এটি
          পাঠানো যায়। এক কথায় বলা যায় কন্টেকস্ এপিআই হলো অনেক শক্তিশালী একটি
          স্টেট যা কঠিন কাজ গুলোকে অনেক সহজে করে দিতে আমাদের সাহায্য করে।{" "}
        </p>
      </div>
      <div className="w-[900px] shadow-2xl mt-5 p-5 bg-red-50">
        <h1 className="text-xl font-bold mb-4">Q2: What is Symantice tag?</h1>
        <p>
          <strong>Answer:</strong>
          সিমানটিক ট্যাগ হলো প্রর্দশনীমূলক ট্যাগ যা ইচটিএমএল এ কি কি ব্যাবহার
          করা হেয়েছে সেটা খূব সহজেই আমাদের বলে দেয়। আমরা যখন সিমানটিক ট্যাগ গালো
          ব্যাবহার করি তখন এর মধ্যে কি কি আছে এক পলক দেখলৈই বুজতে পারি।HTML এ
          ব্যবহৃত Symantic tag গুলো হলো: main,section,article,footer etc। এই
          ট্যাগ উল্টো দিকে Symantic নয়। তারা শুধুমাত্র টেক্সট দেখতে কেমন হওয়া
          উচিত তা নির্ধারণ করে (বোল্ড বা তির্যক), এবং মার্কআপে কোন অতিরিক্ত অর্থ
          প্রদান করে না। Symantic HTML ট্যাগগুলি সার্চ ইঞ্জিন এবং অন্যান্য
          ব্যবহারকারী ডিভাইসগুলিকে ওয়েব পৃষ্ঠাগুলির গুরুত্ব এবং প্রসঙ্গ
          নির্ধারণ করতে সহায়তা করে। যেই পৃষ্ঠাগুলি Symantic ট্যাগ দিয়ে লিখা হয়
          সেগুলো পড়তে অনেত সহজ।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
