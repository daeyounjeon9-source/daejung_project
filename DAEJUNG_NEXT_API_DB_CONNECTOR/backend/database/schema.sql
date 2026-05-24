CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'CUSTOMER',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  country TEXT,
  city TEXT,
  category TEXT,
  price NUMERIC(14,2) DEFAULT 0,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  product_id UUID REFERENCES products(id),
  quantity INTEGER DEFAULT 1,
  payment_status TEXT DEFAULT 'PENDING',
  delivery_status TEXT DEFAULT 'READY',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS finance_ledger (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  amount NUMERIC(14,2) DEFAULT 0,
  tax_amount NUMERIC(14,2) DEFAULT 0,
  fee_amount NUMERIC(14,2) DEFAULT 0,
  settlement_status TEXT DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor TEXT,
  action TEXT,
  risk_level TEXT DEFAULT 'LOW',
  detail JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS market_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT,
  city TEXT,
  product_id UUID REFERENCES products(id),
  category TEXT,
  views INTEGER DEFAULT 0,
  cart_count INTEGER DEFAULT 0,
  sales_count INTEGER DEFAULT 0,
  refund_count INTEGER DEFAULT 0,
  trend_score NUMERIC(8,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
