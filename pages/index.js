import Head from 'next/head';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import Table from '@/components/Table';
import Form from '@/components/Form';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Manage = dynamic(() => import('../container/Manage'));
const Navigation = dynamic(() => import('../components/Navigation'));

export default function Home() {
  return (
    <div>
      <Navigation />
      {/* <Manage /> */}
    </div>
  );
}
