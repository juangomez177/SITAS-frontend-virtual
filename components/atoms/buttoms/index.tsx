export function Buttom() {
    return <button className="color-gradient w-[163px] h-11 rounded-full text-white font-bold shadow">
        Click me</button>
}

export function Menu() {
    return (
        <button className="w-6 h-3 text-black">
            <svg xmlns='http://www.w3.org/2000/svg' width='24px' height='11px' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z' />
                </svg>
        </button>
    );
}