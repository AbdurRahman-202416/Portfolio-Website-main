import Image from 'next/image';

<div className="order-1 xl:order-none mb-8 xl:mb-0">
    <div className="w-full h-full relative">
        <div style={{ opacity: 1 }}>
            <div
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
                style={{ opacity: 1 }}
            >
                <Image
                    alt="Descriptive Alt Text"
                    src="/assets/photo.png"
                    layout="fill"
                    objectFit="contain"
                    priority
                    className="object-contain"
                />
            </div>
            <svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx={253}
                    cy={253}
                    r={250}
                    stroke="#00ff99"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8.63522 163.0896 49.03879 41.31342"
                    style={{
                        transform: 'rotate(332.176deg)',
                        transformOrigin: '253px 253px',
                    }}
                />
            </svg>
        </div>
    </div>
</div>
