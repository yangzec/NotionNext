/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Brand = () => {
  const brands = siteConfig('STARTER_BRANDS')
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='py-20 dark:bg-dark'>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {/* {siteConfig('STARTER_FEATURE_TITLE')} */}
                  合作伙伴
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {/* {siteConfig('STARTER_FEATURE_TEXT_1')} */}
                  我们与众多知名企业合作，共同推动行业发展
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {/* {siteConfig('STARTER_FEATURE_TEXT_2')} */}
                  携手顶尖企业，共建产业新生态
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
