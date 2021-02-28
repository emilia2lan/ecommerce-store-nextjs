/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const productPage = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto;
  grid-gap: 1rem;
  margin: 25px;

  h1,
  h2,
  h3 {
    color: #252c58;
  }
  p {
    color: #252c58;
  }
  button {
    color: #bda06a;
    background: #252c58;

    cursor: pointer;
    width: 80px;
    height: 35px;
    font-size: 25px;
    text-align: center;
  }
  button:hover {
    color: #bda06a;
    background: #252c58;
    box-shadow: 2px 2px 2px 0px #d7727c;
    cursor: pointer;
  }
`;

export default function Home(props) {
  return (
    <>
      <Layout>
        <Head>
          <title>WatchYouGot</title>
          <link rel="logo" href="/logo.ai" />
        </Head>
      </Layout>
      {props.watches.map((watch) => {
        return (
          <div>
            {watch.productName} {watch.aboutCollection} {watch.description}{' '}
            {watch.imagesUrl} {watch.price}{' '}
          </div>
        );
      })}

      <div css={productPage}>
        <div>
          <h1>Available products</h1>
          <section>
            <Link href="#">
              <a>Rolex Lady-Datejust 26 mm</a>
            </Link>

            <Image
              src="/rolexDateJust.jpg"
              width={210}
              height={370}
              alt="rolex watch"
            />
            <h3>About collection</h3>
            <p>
              This beautiful elegant ladies 26 mm Rolex date just watch would
              look great on any wrist with fluted bezel, oyster bracelet and
              roman numeral silver color dial. Date at 3 o'clock stainless
              steel. Watch comes with box and is ready for your wrist. The light
              reflections on the case sides and lugs highlight the elegant
              profile of the Oyster case, which is fitted with a Fluted bezel.
              Rolex's classic feminine watch, the Lady-Datejust is in the
              lineage of the Datejust, the emblematic model that has been a
              byword for style and accurate timekeeping.{' '}
            </p>
            <p>Price: 4.500,00 euro</p>
            <button> Buy</button>
          </section>
        </div>
        <div>
          <section>
            <h2>Patek Philippe Calatrava Tiffany &#38; Co 34.6 mm</h2>
            <Image
              src="/patek1.jpg"
              width={215}
              height={390}
              alt="patek watch"
            />
            <h3>About collection</h3>
            <p>
              Antoine Nobert de Patek knew the importance of relationships and
              building international clientele and retailer partnerships. In
              1851 he partnered with the fine jeweller "Tiffany &#38; Co" New
              York (USA). One of the brands oldest partnership's that is still
              maintained till this day. This partnership is still shown with the
              brand having their motif on the dial. One of the only retailers in
              the world to be allowed to do so on regular production models.
              There fore making each piece rare and unique. This particular
              model is the Ladies officers case Calatrava ref 7200R-001 model.
              Made in an all 18t rose gold officers style case, held on a
              genuine alligator strap with matching rose gold pin buckle. Fitted
              with a manufacture calibre 240 automatic self-winding movement.
              Cream dial with applied gold Arabic numerals and Tiffany &#38; Co
              transferred motif. Finished with a sapphire crystal glass and case
              back.{' '}
            </p>
            <p>Price: 26.520,00 euro</p>
            <button> Buy</button>
          </section>
        </div>
        <div>
          <section>
            <h2>Tudor Style Swiss Stainless Steel 34 mm</h2>
            <Image
              src="/tudor.jpg"
              width={390}
              height={390}
              alt="tudor watch"
            />
            <h3>About collection</h3>
            <p>
              If you think of golden times, you have good memories. TUDOR
              dedicates itself to retro design, which has proven its worth since
              the beginning of watch history. TUDOR inspires with sporty designs
              as well as with sophisticated vintage creations. Here the highest
              technical performance meets stylish elegance.
            </p>

            <p>Price: 1.999,00 euro</p>
            <button> Buy</button>
          </section>
        </div>
        <div>
          <section>
            <h2>Cartier Ballon Bleu 37mm </h2>
            <Image
              src="/cartier.jpg"
              width={390}
              height={390}
              alt="tudor watch"
            />
            <h3>About the collection </h3>
            <p>
              Airy like a balloon, blue like the cabochon it encloses - the
              Ballon Bleu de Cartier elegantly adorns women's and men's wrists.
              The Roman numerals are distracted from their course under the
              influence of a deep blue winding crown. A case with outwardly
              curved lines, engine-turned dial, sword-shaped hands, bracelets
              with polished or satin-finished links ... the Ballon Bleu de
              Cartier follows its path through the Cartier watch universe.
            </p>
            <p>Price: 7.250,00 euro</p>
            <button>Buy</button>
          </section>
        </div>
      </div>
    </>
  );
}
