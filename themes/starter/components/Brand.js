/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Brand = () => {
  const brands = siteConfig('STARTER_BRANDS')
  // const CONFIG = props?.NOTION_CONFIG || CONFIG
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='py-20 dark:bg-dark'>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_BRAND_TITLE', null, CONFIG)}
                  {/* Our Partners */}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_BRAND_TEXT_1')}
                  {/* Partnering with Industry Leaders to Drive Innovation */}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_BRAND_TEXT_2')}
                  {/* Building a New Ecosystem with Industry Leaders */}
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11'>
            {brands?.map((item, index) => {
              return (
                <a key={index} href={item.URL}>
                  <img
                    src={item.IMAGE}
                    alt={item.TITLE}
                    className='max-h-[40px] w-auto dark:hidden'
                  />
                  <img
                    src={item.IMAGE_WHITE}
                    alt={item.TITLE}
                    className='max-h-[40px] w-auto hidden dark:block'
                  />
                </a>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Brands Section End --> */}
    </>
  )
}
