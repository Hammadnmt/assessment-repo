import React from "react";
import ProductCard from "@/components/Product";
export default function page() {
  const products = [
    {
      title: "IA Pair Trading on Steroids",
      acronym: "PTOS",
      description:
        "Designed for both non-option and option traders, Pair Trading on Steroids helps you hedge your portfolio with inversely correlated assets, reduce risk and amplify profits.",
      oldPrice: 99,
      newPrice: 69,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Crypto Arbitrage Mastery",
      acronym: "CAM",
      description:
        "Leverage market inefficiencies across exchanges to maximize your crypto profits while minimizing risks.",
      oldPrice: 120,
      newPrice: 85,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "AI Market Prediction Pro",
      acronym: "AMPP",
      description: "Predict market movements with cutting-edge AI models trained on years of financial data.",
      oldPrice: 150,
      newPrice: 110,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Options Hedging Toolkit",
      acronym: "OHT",
      description:
        "Tools and strategies to effectively hedge your options positions and minimize downside risks.",
      oldPrice: 80,
      newPrice: 55,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Forex Swing Trader",
      acronym: "FST",
      description: "Capture medium-term currency moves using proven swing trading strategies.",
      oldPrice: 95,
      newPrice: 65,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Commodities Gold Rush",
      acronym: "CGR",
      description: "Capitalize on commodity cycles, focusing on gold, silver, and energy markets.",
      oldPrice: 130,
      newPrice: 99,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Volatility Crusher",
      acronym: "VC",
      description: "Trade volatility like a pro using options strategies designed for unstable markets.",
      oldPrice: 110,
      newPrice: 79,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "ETF Growth Engine",
      acronym: "EGE",
      description: "Long-term ETF strategies for steady portfolio growth with lower risk exposure.",
      oldPrice: 105,
      newPrice: 75,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Penny Stock Radar",
      acronym: "PSR",
      description: "Identify high-potential penny stocks before they hit the mainstream market.",
      oldPrice: 60,
      newPrice: 39,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Tech Sector Alpha",
      acronym: "TSA",
      description: "Focus on disruptive technology companies for high-growth opportunities.",
      oldPrice: 140,
      newPrice: 99,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Real Estate REITs Mastery",
      acronym: "RRM",
      description: "Maximize returns through Real Estate Investment Trusts with expert guidance.",
      oldPrice: 125,
      newPrice: 89,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
    {
      title: "Index Fund Booster",
      acronym: "IFB",
      description: "Boost passive index fund returns with smart portfolio rebalancing strategies.",
      oldPrice: 70,
      newPrice: 49,
      currency: "USD",
      billingCycle: "monthly",
      learnMoreUrl: "#",
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="grid md:grid-cols-3 grid-cols-1">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            acronym={product.acronym}
            description={product.description}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            currency={product.currency}
            billingCycle={product.billingCycle}
            learnMoreUrl={product.learnMoreUrl}
          />
        ))}
      </div>
    </div>
  );
}
