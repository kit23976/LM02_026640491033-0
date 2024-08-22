import React from 'react';
// นายกฤษณล เนียมสุด 026640491033-0
export default function AppMenu() {
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Krisanon</span>
                    </a>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/MyHomePage" className="text-gray-900 dark:text-white hover:underline" aria-current="page">หน้าแรก</a>
                            </li>
                            <li>
                                <a href="herbs/MyHerbForm" className="text-gray-900 dark:text-white hover:underline">เพิ่มข้อมูลยาสมุทไพร</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}