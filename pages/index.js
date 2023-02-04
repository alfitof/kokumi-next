import Head from 'next/head';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import Table from '@/components/table';
import Form from '@/components/form';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Manage = dynamic(() => import('../container/manage'));
const Navigation = dynamic(() => import('../components/navigation'));
import Wallet from '@/components/Wallet';

export default function Home() {
  return (
    <div>
      <Navigation />

      <Wallet />
      {/* <Manage /> */}
    </div>
  );
}
