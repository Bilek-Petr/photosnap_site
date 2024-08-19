import Card from "../components/cards/Card";
import Banner from "../components/banners/Banner";

export default function Stories({ data }) {
  console.log(data);
  return (
    <>
      {/* <section className="banners">
        {data.header.map((item, index) => (
          <Banner key={index} data={item} index={index} />
        ))}
      </section> */}

      <section className="stories">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {data.stories.map((item, index) => (
            <Card key={index} cardData={item} />
          ))}
        </div>
      </section>
    </>
  );
}

//  {
//         "title": "Create and share your photo Stories",
//         "description": "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
//         "cta": "Get an invite",
//         "images": {
//           "desktop": "/images/home/desktop/create-and-share.jpg",
//           "tablet": "/images/home/tablet/create-and-share.jpg",
//           "mobile": "/images/home/mobile/create-and-share.jpg"
//         }
//       },
