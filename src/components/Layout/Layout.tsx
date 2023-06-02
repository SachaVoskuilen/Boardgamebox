import { defaultBreakingPoints } from '@/styles';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import {
  Scrollable,
  GridContentStyle,
  GridHamburgerStyle,
  GridNavigationStyle,
  StyledLayout,
  StyledMain,
  windowSizeType,
} from '.';
import { Navigation } from './Navigation';
import { HamburgerMenu } from './Hamburger';

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
  loading: boolean;
};

export const Layout: FC<Props> = ({ title, children, loading }) => {
  const [menu, setMenu] = useState<string>('default');

  const [windowSize, setWindowSize] = useState<windowSizeType>({ height: 100, width: 100 });

  useEffect(() => {
    // On mount
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

    // Watch
    const handleWindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&family=Nunito&display=swap"
        />
      </Head>
      <StyledMain windowSize={windowSize}>
        {windowSize.width >= defaultBreakingPoints.laptop ? (
          <StyledLayout variant={menu}>
            <GridNavigationStyle>
              <Navigation menu={menu} setMenu={setMenu} windowSize={windowSize} />
            </GridNavigationStyle>
            {menu != 'default' && (
              <GridHamburgerStyle>
                <HamburgerMenu />
              </GridHamburgerStyle>
            )}
            <GridContentStyle>
              <Scrollable>{loading ? <div>loading...</div> : <div>{children}</div>}</Scrollable>
            </GridContentStyle>
          </StyledLayout>
        ) : (
          <StyledLayout variant={menu}>
            <GridNavigationStyle>
              <Navigation menu={menu} setMenu={setMenu} windowSize={windowSize} />
            </GridNavigationStyle>
            {menu != 'default' ? (
              <GridHamburgerStyle>
                <HamburgerMenu />
              </GridHamburgerStyle>
            ) : (
              <GridContentStyle>
                <Scrollable>{loading ? <div>loading...</div> : <div>{children}</div>}</Scrollable>
              </GridContentStyle>
            )}
          </StyledLayout>
        )}
      </StyledMain>
    </>
  );
};
