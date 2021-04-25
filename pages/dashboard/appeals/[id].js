import DashboardLayout from "../../../layouts/dashboard";
import Card from "../../../app/system/ui/card";
import Sheet from "../../../app/system/ui/sheet";
import Button from "../../../app/system/ui/button";

const Appeal = () => {
    return (
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
            {/* Left side */}
            <div className="sm:col-span-3">
                <Card title="Əsas məlumatlar">
                    <div className="border-t border-gray-200">
                        <dl>
                            <div
                                className="bg-gray-50 hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Ad, soyad
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Mamed Məmmədov
                                </dd>
                            </div>
                            <div
                                className="bg-white hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Müraciətin növü
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Şikayət
                                </dd>
                            </div>
                            <div
                                className="bg-gray-50 hover:bg-gray-100 hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    E-poçt
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    mamed@email.com
                                </dd>
                            </div>
                            <div
                                className="bg-white hover:bg-gray-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Telefon
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    +99412 312 33 21
                                </dd>
                            </div>
                            <div
                                className="bg-gray-50 hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ex eu
                                    blandit laoreet. Sed ullamcorper diam eget dictum molestie. Maecenas placerat
                                    elementum quam vel vestibulum.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </Card>
            </div>

            {/* Right side */}
            <div className="sm:col-span-1 space-y-5">
                <Sheet>
                    <div className="p-4 flex flex-col space-y-3">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                            <Button theme="danger" icon={
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="text-red-600 group-hover:text-white" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5
                                  4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            }>
                                Sil
                            </Button>
                            <Button icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            }>
                                Saxla
                            </Button>
                        </div>
                    </div>
                </Sheet>

                <Card title="Ümumi" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600"
                                               fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>}>
                    <div className="space-y-2">
                        <div className="flex flex-wrap justify-between group cursor-pointer">
                            <div className="text-gray-400">Yaradılıb</div>
                            <div className="text-gray-400 group-hover:text-gray-600 transition">[tarix]</div>
                        </div>
                        <div className="flex flex-wrap justify-between group cursor-pointer ">
                            <div className="text-gray-400">Son yenilənmə</div>
                            <div className="text-gray-400 group-hover:text-gray-600 transition">[tarix]</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

Appeal.Layout = DashboardLayout;

export default Appeal;