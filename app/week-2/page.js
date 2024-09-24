import React from 'react';
import Link from 'next/link'; // Add this import for Link
import StudentInfo from './student-info';

const Page = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week-2 Page</Link>
      </p>
    </div>
  );
};

export default Page;
