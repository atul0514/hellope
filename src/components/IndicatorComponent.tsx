

function IndicatorComponent({loadingName}:{loadingName?:string}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">

            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />

            {/* Text */}
            <p className="text-gray-600 text-lg">
                {
                    loadingName??""
                }
            </p>

        </div>
    );
}

export default IndicatorComponent;