import { CheckCircleIcon, LinkIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'
import Link from 'next/link'
import { Button } from '../Button'

export function StockMarketPrediction() {
  return (
    <div className="px-6 pb:8 lg:pb-16 lg:px-8">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="stock-market-prediction" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
          Stock Market Prediction Using Historical Data & Sentiment Analysis
        </Heading>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">An end-to-end data science project combining NLP and time-series forecasting.</h2>
        <Button target='_blank' href="https://github.com/Vinitsharma0804/Stock-Market-Prediction" className='flex gap-2 justify-start items-center mt-4' >
        <span className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
          Github
        </span>
        <LinkIcon className="h-4 w-4 aspect-square" />
        </Button>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Built a Python pipeline using NLTK, TensorFlow, and Keras
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Performed data preprocessing and feature engineering on textual and temporal data
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Implemented and compared multiple ML and deep learning models
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Evaluated performance using standard metrics to identify optimal models
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

