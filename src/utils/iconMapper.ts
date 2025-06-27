import { 
  Heart, 
  Users, 
  Sparkles, 
  Shield, 
  Crown, 
  Clock, 
  Star,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Bot as Lotus,
  Menu,
  X,
  ArrowRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Quote
} from 'lucide-react';

export const iconMap = {
  Heart,
  Users,
  Sparkles,
  Shield,
  Crown,
  Clock,
  Star,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Lotus,
  Menu,
  X,
  ArrowRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Quote
};

export type IconName = keyof typeof iconMap;

export const getIcon = (iconName: IconName) => {
  return iconMap[iconName];
};