import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '@/components/mypage/profile/profile';
import styles from '@/pages/mypage/index.module.scss';

export default function MyPage() {
  return (
    <main className={styles.main}>
      <Profile />
      <ul className={styles['management-list']}>
        <li>
          <Link href="/">
            <span>반려동물 관리</span>
            <Image src="images/arrow-right-green.svg" alt="반려동물 관리 페이지 이동하기" width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>가족 관리</span>
            <Image src="images/arrow-right-green.svg" alt="반려동물 관리 페이지 이동하기" width={24} height={24} />
          </Link>
        </li>
      </ul>
    </main>
  );
}
