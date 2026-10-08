export default function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`w-full rounded-lg bg-indigo-600 px-4 py-2 text-white ${className}`}
        >
            {children}
        </button>
    )
}