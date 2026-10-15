export default function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`w-full rounded-md bg-indigo-600 px-4 py-2 text-white cursor-pointer ${className}`}
        >
            {children}
        </button>
    )
}