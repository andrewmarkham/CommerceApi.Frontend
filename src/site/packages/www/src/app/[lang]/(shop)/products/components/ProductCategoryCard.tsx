import { GenericNode } from "@/graphql/graphql";

export const ProductCategoryCard = (card: GenericNode) => {

    const imageUrl = `${process.env.COMMERCE_ENDPOINT}/${card.DefaultImageUrl}`;
    return (
      <a href={card.RelativePath ?? "#"}>
        <div className="lg:flex max-h-[200px]">
          <div className=" lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
            <img className="" src={imageUrl} />
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{card.DisplayName}</div>
              <div className="text-gray-700 text-base max-w-prose line-clamp-5" dangerouslySetInnerHTML={{ __html: card.Description ?? "" }} />
            </div>
          </div>
        </div>
      </a>
    )
  }