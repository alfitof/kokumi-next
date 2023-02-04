import Head from 'next/head';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '../components/navigation';
import Homepage from '../container/homepage';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Homepage />
      {/* <Manage /> */}
    </div>
  );
}
