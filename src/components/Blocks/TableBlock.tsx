import parseHtml from "@/lib/Parser"

export default function TableBlock({ content }: any) {

  return (
    <div className="table-block">
        {parseHtml(content?.originalContent)}
    </div>
  )
}

                    






