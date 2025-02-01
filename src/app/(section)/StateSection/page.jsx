
const StateSection = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className=" text-2xl text-[#1f80f0] font-heading font-bold mb-4">Trusted by the best</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center mb-16 mx-10">
                    <div className="flex flex-row justify-between lg:flex-col items-center">
                        <div className=" text-6xl md:text-8xl font-heading font-bold text-blue-600 mb-2">{">"}20</div>
                        <div className="text-gray-800 font-paragraph text-xl font-medium my-5">Years of Experience</div>
                    </div>
                    <div class="w-full border-t border-blue-500 border-dashed lg:hidden"></div>
                    <div className="flex flex-row justify-between lg:flex-col items-center">
                        <div className="text-6xl md:text-8xl font-heading font-bold text-blue-600 mb-2">40+</div>
                        <div className="text-gray-800 font-paragraph text-xl font-medium my-5">Financial institutions</div>
                    </div>
                    <div class="w-full border-t border-blue-500 border-dashed lg:hidden"></div>
                    <div className="flex flex-row justify-between lg:flex-col items-center">
                        <div className="text-6xl md:text-8xl font-heading font-bold text-blue-600 mb-2">{">"}200m</div>
                        <div className="text-gray-800 font-paragraph text-xl font-medium my-5">Customers Each</div>
                    </div>
                    <div class="w-full border-t border-blue-500 border-dashed lg:hidden"></div>
                </div>
            </div>
        </div>
    );
};

export default StateSection;