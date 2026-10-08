interface InputTypes {
  label: string;
  type: string;
}

export default function Input({ label, type }: InputTypes) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700" htmlFor="">  
        {label}
      </label>
      <input
        className="w-full rounded-md px-2 py-1 border border-gray-300
             focus:ring-1 focus:ring-blue-300 focus:outline-none"
        type={type}

      />
    </div>
  );
}
