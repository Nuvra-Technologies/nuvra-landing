export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-8 mt-24">
            <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
                <p>© {new Date().getFullYear()} Nuvra Tg. Todos los derechos reservados.</p>
                <p>Hecho con Next.js</p>
            </div>
        </footer>
    );
}
