interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-4 flex items-center justify-center hover:from-gray-800 hover:to-gray-700 transition-colors duration-300 shadow-md">
      <span className="text-gray-300">{name}</span>
    </div>
  )
}

