import { BiCommentDetail } from '@react-icons/all-files/bi/BiCommentDetail'
import { RiHeart3Fill } from '@react-icons/all-files/ri/RiHeart3Fill'
import { RiHeartLine } from '@react-icons/all-files/ri/RiHeartLine'
export default function StoryPreviewFooter() {
  return (
    <div className="flex flex-row items-center bg-gray-100 dark:bg-dark-500 p-4 rounded-b-lg space-x-2">
      <BiCommentDetail />
      <span className="text-sm"> 10 </span>
      <RiHeart3Fill />
      <RiHeartLine />
    </div>
  )
}
