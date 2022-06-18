export default function Container({ children, className }: { children: any; className?: string }) {
  return (
    <div className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 lg:gap-x-6 px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  )
}
